import Appbar from "@/components/Appbar";
import AuthComponent from "@/components/AuthComponent";

export default function () {
  return (
    <div>
      <Appbar />
      <AuthComponent type="signup" />
    </div>
  );
}
