import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTop20SOFUsersAction } from '../../../redux/Actions/GetSOFUsersAction';
import { useCollapse } from 'react-collapsed';
import './StackOverFlow.css'
import { getStackOverFlowUsers } from '../ViewModels/StackOverFlowUsersViewModel';
import { Item } from '../../../shared/models/Item';

function Section(props: any) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0,
    };
    const { getCollapseProps, getToggleProps } = useCollapse(config);
return (
    <div className={props.isUserBlocked ? 'blocked': ''}>
    <div className="collapsible" >
        <div className="header" {...getToggleProps()}>
            <div>
                <img className="cover-img" src={props.userImageUrl} alt="" />
            </div>
            <div>
            <div className="title">
                Name: {props.title}
            </div>
            <div className="title">
                Reputation: {props.UserReputation}
            </div>
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    </div>
    );
}

const StackOverFlowUsersView = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTop20SOFUsersAction());
      }, [dispatch]);

      let stackOverflowUsersState = useSelector((state: any) => state.stackoverflowusers);
      console.log('StackOverflow State',stackOverflowUsersState)

      let stackOverFlowUsers = getStackOverFlowUsers(stackOverflowUsersState) as Item[]
      
      const [data, setState] = useState(stackOverFlowUsers);
      
      console.log('data',data)
      
      const followUser = (user_id: number) => {
        const updatedStackOverFlowUsers = data.map(user => {
            if (user.user_id === user_id) {
              return {
                ...user,
                followed: true
              };
            }
            return user;
          });
          setState(updatedStackOverFlowUsers);
          stackOverFlowUsers = Object.assign([], updatedStackOverFlowUsers);
      };
    
      const unfollowUser = (user_id: number) => {
        const updatedStackOverFlowUsers = data.map(user => {
            if (user.user_id === user_id) {
              return {
                ...user,
                followed: false
              };
            }
            return user;
          });
          stackOverFlowUsers = Object.assign([], updatedStackOverFlowUsers);
          setState(updatedStackOverFlowUsers);
      };

      const blockUser = (user_id: number) => {
        const updatedStackOverFlowUsers = data.map(user => {
            if (user.user_id === user_id) {
              return {
                ...user,
                blocked: true
              };
            }
            return user;
          });
          stackOverFlowUsers = Object.assign([], updatedStackOverFlowUsers);
          setState(updatedStackOverFlowUsers);
      };

      const unBlock = (user_id: number) => {
        const updatedStackOverFlowUsers = data.map(user => {
            if (user.user_id === user_id) {
              return {
                ...user,
                blocked: true
              };
            }
            return user;
          });
          stackOverFlowUsers = Object.assign([], updatedStackOverFlowUsers);
          setState(updatedStackOverFlowUsers);
      };

      return (
        <div>
        { data.map(({display_name, user_id, profile_image, reputation, followed, blocked}) => {
        return (
          <div className='card' key={user_id}>
            <div className={followed ? 'followed': ''}>
            <Section
              userImageUrl={profile_image}
              title={display_name}
              UserReputation={reputation}
              defaultExpanded="false"
              isUserBlocked = {blocked}
              isFollowed = {followed}
            >
            {!followed ? (
              <button className="follow-btn" onClick={() => followUser(user_id)}>
                Follow
              </button>
            ) : (
              <button className="unfollow-btn" onClick={() => unfollowUser(user_id)}>
                Unfollow
              </button>
            )}

            {!blocked ? (
              <button className="block-btn" onClick={() => blockUser(user_id)}>
                Block
            </button>
            ) : (
            <button className="block-btn" onClick={() => unBlock(user_id)}>
                Unblock
              </button>
            )}
            </Section>
            </div>
          </div>
        );
        })}
        </div>
      );
}

export default StackOverFlowUsersView;
