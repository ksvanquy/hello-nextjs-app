import Image from "next/image";
import Link from "next/link";

// import styles from "./styles/app.css";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";

export default function Home() {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
        <li>
          <Link href={"/tiktok"}>Tiktok</Link>
        </li>
      </ul>
    </div>
  );
}
