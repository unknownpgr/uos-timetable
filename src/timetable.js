const { chromium } = require("playwright");

async function getSessionCookie(id, password) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://portal.uos.ac.kr/index.jsp");
  await page.fill("#user_id", id);
  await page.fill("#user_password", password);
  await page.click('button:has-text("Login")');
  await page.waitForURL("https://portal.uos.ac.kr/*");

  const cookies = await context.cookies();
  const { value } = cookies.find(
    (cookie) =>
      cookie.name === "JSESSIONID" && cookie.domain === "portal.uos.ac.kr"
  );

  await browser.close();
  return value;
}

async function getTimetable(id, password) {
  const cookie = await getSessionCookie(id, password);
  const ret = await fetch("https://portal.uos.ac.kr/uos/Ptl008Portlet.eps", {
    headers: { cookie: `JSESSIONID=${cookie};default_locale=ko;` },
    method: "POST",
  });
  return await ret.json();
}

module.exports = { getTimetable };
