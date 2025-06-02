import dayjs from "dayjs";

export function Footer() {
  return (
    <footer className="mt-16 mb-4">
      <p className="text-center text-xs text-muted-foreground">
        {`Copyright © ${dayjs().year()}, Jihan Jasper Al Rashid. All
        rights reserved.`}
      </p>
    </footer>
  );
}
