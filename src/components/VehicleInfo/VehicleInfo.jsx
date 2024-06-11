import css from "./VehicleInfo.module.css";

export const VehicleInfo = ({ data }) => {
  return (
    <div className={css.details_container}>
      <h3 className={css.header}>Vehicle Details</h3>
      <div className={css.element}>
        <p className={css.description}>Form</p>
        <p className={css.description}>
          {data.form.charAt(0).toUpperCase() + data.form.slice(1)}
        </p>
      </div>
      <div className={css.element}>
        <p className={css.description}>Length</p>
        <p className={css.description}>{data.length}</p>
      </div>
      <div className={css.element}>
        <p className={css.description}>Width</p>
        <p className={css.description}>{data.width}</p>
      </div>
      <div className={css.element}>
        <p className={css.description}>Height</p>
        <p className={css.description}>{data.height}</p>
      </div>
      <div className={css.element}>
        <p className={css.description}>Tank</p>
        <p className={css.description}>{data.tank}</p>
      </div>
      <div className={css.element}>
        <p className={css.description_last}>Consumption</p>
        <p className={css.description}>{data.consumption}</p>
      </div>
    </div>
  );
};
