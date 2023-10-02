import s from './Sitebar.module.css';
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {NavLink} from "react-router-dom";


const Sitebar = () => {
    return (
        <section className={s.sitebar} id='sitebar'>
            <div className={s.sitebarContent}>
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/profile" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Profile</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/dialogs" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Messages</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/news" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>News</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/music" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Music</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/stories" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Stories</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/searchFriend" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Find friends</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/recomend" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Recomendations</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/video" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Video</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/marketplace" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Marketplace</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.item}>*/}
                {/*    <NavLink to="/donat" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}>Get donat</NavLink>*/}
                {/*</div>*/}
                {/*<div className={`${s.item} ${s.setings}`}>*/}
                {/*    <NavLink to="/setings" style={({isActive, isPending}) => {*/}
                {/*        return {*/}
                {/*            backgroundColor: isActive ? "#bebdbd" : "",*/}
                {/*        };*/}
                {/*    }}><FontAwesomeIcon icon={faGear}/></NavLink>*/}
                {/*</div>*/}

                <NavLink to="/profile" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Profile</NavLink>

                <NavLink to="/dialogs" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Messages</NavLink>

                <NavLink to="/news" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>News</NavLink>
                <NavLink to="/music" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Music</NavLink>

                <NavLink to="/stories" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Stories</NavLink>

                <NavLink to="/searchFriend" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Find friends</NavLink>

                <NavLink to="/recomend" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Recomendations</NavLink>

                <NavLink to="/video" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Video</NavLink>

                <NavLink to="/marketplace" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Marketplace</NavLink>

                <NavLink to="/donat" className={s.item} style={({isActive, isPending}) => {
                    return {
                        backgroundColor: isActive ? "#bebdbd" : "",
                    };
                }}>Get donat</NavLink>

                <div className={s.setings}>
                    <NavLink to="/setings" style={({isActive, isPending}) => {
                        return {
                            backgroundColor: isActive ? "#bebdbd" : "",
                        };
                    }}><FontAwesomeIcon icon={faGear}/></NavLink>
                </div>

            </div>
        </section>
    );
};

export default Sitebar;