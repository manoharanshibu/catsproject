import * as React from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import './ListItems.scss';

import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { useDispatch, useSelector } from "react-redux";

import { fetchCats, fetchVotes } from "../state/action-creators";

import { IconButton, Typography } from "@material-ui/core";
import { FavoriteBorderOutlined, FavoriteOutlined, ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";

const ListItems = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cats, loadedCats, loadedVotes } = useSelector((state: State) => state.catsReducer)

  const { voteUp, voteDown, makeFavourite, makeUnFavourite } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  useEffect(() => {
    if (loadedCats && !loadedVotes) dispatch(fetchVotes());
  }, [loadedCats]);

  return (
    <div><button className="uploadbutton button" onClick={() => history.push('/upload')}>Upload New Cat Image</button>
      <div className="container">
        {cats.map((item: any) => {
          return (<div className="item">
            <img className="center" src={item.url} />
            <div className="buttonbar">
              <Typography variant="button" className="votetext">
                Votes: {item.votes ? item.votes.value : 0}
              </Typography>
              <IconButton onClick={() => item.favouriteId ? makeUnFavourite(item.id, item.favouriteId) : makeFavourite(item.id)} >
                {item.favouriteId ? (
                  <FavoriteOutlined />
                ) : (
                    <FavoriteBorderOutlined />
                  )}
              </IconButton>
              <IconButton
                onClick={() => voteDown(item.id, item.votes && item.votes.value > 0 ? item.votes.value - 1 : 0)}
              >
                <ArrowDownwardRounded />
              </IconButton>

              <IconButton
                onClick={() => voteUp(item.id, item.votes && item.votes.value > 0 ? item.votes.value + 1 : 1)} >
                <ArrowUpwardRounded />
              </IconButton>

            </div>
          </div>)
        })}
      </div></div>
  )
}

export default ListItems;
