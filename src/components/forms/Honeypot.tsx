/** Invisible anti-spam field: humans never see or fill it; bots usually do. */
export function Honeypot() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label>
        Website
        <input type="text" name="cl_website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
