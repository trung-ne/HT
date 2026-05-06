"use client";

type HomeSplashProps = {
  showSplash: boolean;
  splashFading: boolean;
  splashDesc: string;
};

export default function HomeSplash({ showSplash, splashFading, splashDesc }: HomeSplashProps) {
  if (!showSplash) {
    return null;
  }

  return (
    <div id="js-splash" className={`p-splash p-splash--light-bg ${splashFading ? "is-hidden" : ""}`}>
      <div
        className="p-splash__img p-splash__img--home"
        style={{
          backgroundImage:
            "url(http://molaholdings.com/jp/wp/wp-content/uploads/2016/10/s_shutterstock_374002921-min.jpg)",
        }}
      />
      <div className="p-splash__inner l-inner">
        <div className="p-splash__catch">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="redhomes"
            style={{ height: 100, width: "auto" }}
          />
        </div>
        <div className="p-splash__desc p-splash__desc--dark c-font--type3">
          {splashDesc}
        </div>
      </div>
    </div>
  );
}