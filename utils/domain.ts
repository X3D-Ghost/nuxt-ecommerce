export function getDomain(hostname: string) {
  let result = "";

  const localhost = "localhost";
  const separator = ".";
  const start = hostname.indexOf(separator);
  const withoutPort = hostname.replace(/:[0-9]+/, "");

  const isIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g.test(
      withoutPort
    );

  if (isIpAddress) {
    return withoutPort;
  }

  if (withoutPort.endsWith(localhost)) {
    const splitted = withoutPort.split(".");

    return splitted[splitted.length - 1];
  }

  if (start !== -1) {
    const split = hostname.split(separator);

    result = withoutPort
      .split(separator)
      .slice(split.length - 2)
      .join(separator);
  }

  return result;
}

export function getSubdomain(url: string): string | null {
  let domain = url;
  if (!url.includes(".")) return null;
  if (url.includes("://")) {
    domain = url.split("://")[1];
  }
  return domain.split(".")[0];
}
