export async function onRequest({request, env}) {
  // 获取访问信息
  const geo = request.eo.geo;
  const url = new URL(request.url);

  // 简单的访问统计逻辑
  try {
    // 记录访问信息到控制台（可在 EdgeOne 控制台查看日志）
    console.log('页面访问:', {
      path: url.pathname,
      country: geo?.country || 'Unknown',
      city: geo?.city || 'Unknown',
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('User-Agent')?.substring(0, 100) || 'Unknown'
    });

  } catch (error) {
    console.error('统计记录失败:', error);
  }

  // 返回 null 实现 passthrough 模式
  // 原始的 index.html 会正常返回，不会被函数响应替换
  return null;
}
