type ProcessStep = {
  title: string;
  description: string;
};

type HomePurchaseProcessProps = {
  title: string;
  steps: ProcessStep[];
};

export default function HomePurchaseProcess({ title, steps }: HomePurchaseProcessProps) {
  return (
    <section className="home-process">
      <div className="home-process__inner">
        <h2 className="home-process__title">{title}</h2>
        <ol className="home-process__steps">
          {steps.map((step, i) => (
            <li key={i} className="home-process__step">
              <div className="home-process__step-number">{i + 1}</div>
              <div className="home-process__step-body">
                <h3 className="home-process__step-title">{step.title}</h3>
                <p className="home-process__step-desc">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="home-process__step-arrow" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

