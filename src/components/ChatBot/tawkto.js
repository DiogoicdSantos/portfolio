export const tawkToLoadScripts = async () => {
  await (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWKTO_ID}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  window.Tawk_API.onLoad = function () {
    window.Tawk_API.setAttributes({
      ...attritbutesToSet,
    });
  };

  window.Tawk_API.onChatMaximized = function () {
    const page_path = location.pathname + location.search;
    window.Tawk_API.addEvent("current-path", {
      path: page_path,
    });
  };
};
