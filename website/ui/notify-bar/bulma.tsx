import { useEffect, useState } from "react";
import { Anchor } from "ui/core/anchor";

import { NotifyBar } from ".";

export const BulmaNotifyBar = () => {
  const [show, setShow] = useState(() => false);
  useEffect(() => {
    if (__PROD__) setShow(document.referrer.includes("bulma.io"));
  }, []);
  return show ? (
    <NotifyBar className="animate-slide-down">
      <p>
        <b>Hey there, Bulma viewer!</b>
        <br />
        This website is now made using Tailwind CSS. View the previous Bulma version on{" "}
        <Anchor
          className="text-primary-500 hover:underline"
          href="https://web.archive.org/web/20181123052514/https://griko.id/"
        >
          archive.org
        </Anchor>
        .
      </p>
    </NotifyBar>
  ) : null;
};
