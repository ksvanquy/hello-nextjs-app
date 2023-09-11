"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const Facebook = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  return (
    <div>
      facebook page
      <div>
        <Button variant="danger">Hoi dan IT</Button>
        <button onClick={() => handleBtn()}>Back</button>
        <button type="button" onClick={() => router.push("/")}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Facebook;
