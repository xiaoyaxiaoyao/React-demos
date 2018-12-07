export function getRedirectPath(type){
  // 根据用户的访问 的地址 返回跳转地址
  let HomeUrl = (type === "home") ? "/home":"/login" 
  return HomeUrl
}