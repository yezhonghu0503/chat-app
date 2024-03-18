/**
 * 使用setTimeout模拟setInterval
 */

// 函数防抖
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
) {
  //   console.log(func);
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null; // 清空引用，避免内存泄漏
    }, wait);
  };
}

// 函数节流
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): T {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let args: any[] = [];
  let context: any;

  const later = () => {
    func.apply(context, args);
    timeout = null;
  };

  const throttled = function (this: any, ...params: Parameters<T>) {
    args = params;

    // eslint-disable-next-line consistent-this
    context = this;

    if (timeout === null) {
      timeout = setTimeout(later, wait);
    }
  };

  return throttled as T;
}
