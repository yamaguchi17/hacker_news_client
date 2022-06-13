/**
 * 現在時刻から何日時前か返す関数
 * @param unixTime (UnixTime, 単位：秒)
 * @returns {string} (~~ time ago)を返します
 */
export const distanceTime = (unixTime:number):string => {
  const date = new Date(unixTime * 1000);
  const diff = new Date().getTime() - date.getTime();
  const d = new Date(diff);

  let dTime = 0;
  let unit = "";

  if (d.getUTCFullYear() - 1970) {
    dTime = d.getUTCFullYear() - 1970;
    unit = "year";
  } else if (d.getUTCMonth()) {
    dTime = d.getUTCMonth();
    unit = "month";
  } else if (d.getUTCDate() - 1) {
    dTime = d.getUTCDate() - 1;
    unit = "day";
  } else if (d.getUTCHours()) {
    dTime = d.getUTCHours();
    unit = "hour";
  } else if (d.getUTCMinutes()) {
    dTime = d.getUTCMinutes();
    unit = "minute";
  } else {
    dTime = d.getUTCSeconds();
    unit = "second";
  }

  if(dTime !== 1) unit += "s";

  return `${dTime} ${unit} ago`;
}