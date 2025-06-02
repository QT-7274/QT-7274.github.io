export async function onRequest({ request }) {
    // 获取客户端支持的图片类型
    const accept = request.headers.get('Accept');
    const option = { eo: { image: {} } };

    // 检查客户端是否支持 WebP 格式的图片,若不支持响应原图
    // if (accept && accept.includes('image/webp')) {
      option.eo.image.format = 'webp';
    // }

  const response = await fetch('http://drogbaqu.qcdntest.cn/drogbaqu/img/drogba.jpg', option);
  
  return response;
}
