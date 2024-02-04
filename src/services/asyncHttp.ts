import axios from 'axios';
import qs from 'qs';

import type { RequestMethod } from '@/constants/REQUEST_METHOD';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json charset=utf-8' },
});
interface IRequestConfig {
  url: string;
  method: RequestMethod;
  data?: { [key: string]: string | number | null };
  headers?: { [key: string]: string };
  params?: string;
}
// 请求拦截器
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // 在请求发送之前可以进行一些操作，比如添加 token 等
//     // config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);
// 封装异步请求
export default async function asyncHttp<T>({ url, method = 'get', data, headers }: IRequestConfig): Promise<T> {
  const baseOptions: IRequestConfig = {
    url,
    method,
    headers,
  };
  // 将请求方法转为大写
  const methodUpperCased = method.toUpperCase();
  // 如果是GET请求，将data转为params
  if (methodUpperCased === 'GET') {
    baseOptions.params = qs.stringify(data);
  } else if (methodUpperCased === 'POST') {
    baseOptions.data = data;
  }

  // 发送请求
  return axiosInstance(baseOptions).then((res) => res.data);
}
