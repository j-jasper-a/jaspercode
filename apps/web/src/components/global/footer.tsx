import dayjs from "dayjs";

export function Footer() {
  return (
    <footer className="mt-16 mb-4">
      <p className="text-center text-size-secondary text-color-foreground-tertiary">
        {`Copyright © ${dayjs().year()}, Jihan Jasper Al Rashid. All
        rights reserved.`}
      </p>
    </footer>
  );
}
