import dayjs from "dayjs";

export function Footer() {
  return (
    <footer className="mb-4 mt-16">
      <p className="text-muted-foreground text-center text-xs">
        {`Copyright © ${dayjs().year()}, Jihan Jasper Al Rashid. All
        rights reserved.`}
      </p>
    </footer>
  );
}
