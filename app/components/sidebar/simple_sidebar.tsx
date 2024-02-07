import SimpleHomeButton from "../button/simple/home";
import SimpleShortsButton from "../button/simple/shorts";
import SimpleYouButton from "../button/simple/you";
import SimpleSubscriptionsButton from "../button/simple/Subscriptions";
import SimpleHistoryButton from "../button/simple/history";
import { SidebarProps } from "../utils/sidebar_shared";

export default function SimpleSidebar({ selectedPage, setter }: SidebarProps) {
  return (
    <div className="hidden lg:flex flex-col grow-3">
      <SimpleHomeButton
        activated={0 == selectedPage}
        onClick={() => setter(0)}
      />
      <SimpleShortsButton
        activated={1 == selectedPage}
        onClick={() => setter(1)}
      />
      <SimpleSubscriptionsButton
        activated={2 == selectedPage}
        onClick={() => setter(2)}
      />
      <SimpleYouButton
        activated={3 == selectedPage}
        onClick={() => setter(3)}
      />
      <SimpleHistoryButton
        activated={4 == selectedPage}
        onClick={() => setter(4)}
      />
    </div>
  );
}
