import SocialIcon from "@/components/social-icons"
import { Button } from "@/components/ui/button"

const FacebookButton = () => {
  return (
    <Button variant="outline" className="rounded-full hover:bg-sky-500" size="icon">
      <SocialIcon kind="facebook" size={6} href={"https://www.facebook.com/profile.php?id=61556544511279"} />
    </Button>
  )
}

export default FacebookButton
