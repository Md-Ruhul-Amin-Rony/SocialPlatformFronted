
import {Image, List, Popup} from "semantic-ui-react";
import {observer} from "mobx-react-lite";
import { Link } from 'react-router-dom';

import { Profile } from '../../../app/layout/models/Profile';
import ProfileCard from '../../profiles/ProfileCard';

interface Props {
    attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({attendees}: Props) {
    return (
        <List horizontal>
            {attendees.map(attendee => (
                <Popup
                    hoverable
                    key={attendee.username}
                    trigger={
                        <List.Item as={Link} to={`/profiles/${attendee.username}`}>
                            <Image size='mini'
                                   circular
                                   src={attendee.image || `/assets/user.png`} />
                        </List.Item>
                    }
                >
                    { <Popup.Content>
                        <ProfileCard profile={attendee} />
                    </Popup.Content> }
                </Popup>
            ))}
        </List>
    )
})