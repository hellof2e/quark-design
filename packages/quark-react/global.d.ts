declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
 
// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    [key: string]: any;
  };
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
      APPNAME: 'AppHellobikeWXSS';
    }
  }
}

export {};
declare global {
  /**
   * 微信小程序
   */
  const IS_WEAPP: boolean;
  const my: any;
  const wx: any;
  /**
   * 微信平台小程序
   */
  const IS_WXSS: boolean;
  /**
   * h5
   */
  const IS_H5: boolean;
  /**
   * 支付宝小程序
   */
  const IS_ALIPAY: boolean;
  const TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
  const NODE_ENV: 'development' | 'production';
  const USE_BASE_CTX_KEY: string; // ctx  key
  /**
   * APPNAME
   */
}
