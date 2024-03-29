import type { NextPage } from 'next'
import BackButton from "@/components/backButton";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Music'
};

const Music: NextPage = () => {
    return (
      <>
        <BackButton />
        <div className="page">
            <iframe className="soundcloud" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/20147150&amp;color=%23c4c4c4&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
        </div>
      </>
    );
}
export default Music