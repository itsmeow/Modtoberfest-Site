import React from "react";
import Link from "next/link";
import classNames from "classnames";

export default function Details({ className }) {
  const titleClasses = "text-teal-200 font-brand font-bold tracking-wider mt-4";
  return (
    <div className={classNames(className, "text-center")}>
      <h2 className={titleClasses}>What is modtoberfest?</h2>
      <p>
        Modtoberfest is a celebration of the open source Minecraft modding
        community. During October 2020 we are challenging participants to create
        quality pull requests for certain community projects.
      </p>

      <h2 className={titleClasses}>How do I participate?</h2>
      <p>
        Make 4 pull request to unique{" "}
        <Link href="/repositories">
          <a className="font-bold">Sponsors repositories</a>
        </Link>
      </p>

      <h2 className={titleClasses}>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>{" "}
        -{" "}
        <Link href="/rules">
          <a>Rules</a>
        </Link>{" "}
        - <a href="https://discord.modtoberfest.com">Discord</a> -{" "}
        <Link href="/tips">
          <a>Tips</a>
        </Link>{" "}
        -{" "}
        <Link href="/participants">
          <a>Sponsors</a>
        </Link>
      </h2>
    </div>
  );
}
