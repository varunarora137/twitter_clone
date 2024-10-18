import React, { useState } from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
import { timeSince } from "../utils/constant";

const Tweet = ({ tweet }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const likeOrDislikeHandler = async (id) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
    setLoading(false);
  };
  const deleteTweetHandler = async (id) => {
    setLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`);
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)]">
          <img
            src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-18-223_512.gif"
            className="w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Loading"
          />
        </div>
      ) : (
        <div className="border-b border-gray-200">
          <div>
            <div className="flex p-4">
              <Avatar
                src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                size="40"
                round={true}
              />
              <div className=" ml-2 w-full">
                <div className="flex items-center">
                  <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
                  <p className="text-gray-500 text-sm ml-1">{`@${
                    tweet?.userDetails[0]?.username
                  } . ${timeSince(tweet?.createdAt)}`}</p>
                </div>
                <div>
                  <p>{tweet?.description}</p>
                </div>
                <div className="flex justify-between my-3">
                  <div className="flex items-center">
                    <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                      <FaRegComment size="20px" />
                    </div>
                    <p>0</p>
                  </div>
                  <div className="flex items-center">
                    <div
                      onClick={() => likeOrDislikeHandler(tweet?._id)}
                      className="p-2 hover:bg-pink-200 rounded-full cursor-pointer"
                    >
                      <CiHeart size="24px" />
                    </div>
                    <p>{tweet?.like?.length}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                      <CiBookmark size="24px" />
                    </div>
                    <p>0</p>
                  </div>
                  {user?._id === tweet?.userId && (
                    <div
                      onClick={() => deleteTweetHandler(tweet?._id)}
                      className="flex items-center"
                    >
                      <div className="p-2 hover:bg-red-300 rounded-full cursor-pointer">
                        <MdOutlineDeleteOutline size="24px" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tweet;
