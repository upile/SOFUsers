import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { actionGetTop20SOFUsersSagaWatcher, getTop20SOFUsersSaga } from './GetSOFUsersSaga';
import { getTop20SOFUsersAction, GET_TOP20_SOF_USERS, GET_TOP20_SOF_USERS_SUCCESS, GET_TOP20_SOF_USERS_ERROR } from '../../Actions/GetSOFUsersAction';
import { getTop20SOFUsers } from '../../../services/apis/GetTop20SOFUsers';

describe('Genre Sagas', () => {

    const resultStub = {
      items: [{
        "badge_counts": {
          "bronze": 9179,
          "silver": 9105,
          "gold": 862
        },
        "account_id": 11683,
        "is_employee": false,
        "last_modified_date": 1687739424,
        "last_access_date": 1687766059,
        "reputation_change_year": 32354,
        "reputation_change_quarter": 15230,
        "reputation_change_month": 4333,
        "reputation_change_week": 129,
        "reputation_change_day": 41,
        "reputation": 1409837,
        "creation_date": 1222430705,
        "user_type": "registered",
        "user_id": 22656,
        "accept_rate": 86,
        "location": "Reading, United Kingdom",
        "website_url": "http://csharpindepth.com",
        "link": "https://stackoverflow.com/users/22656/jon-skeet",
        "profile_image": "https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=256&d=identicon&r=PG",
        "display_name": "Jon Skeet"
      }, {
        "badge_counts": {
          "bronze": 782,
          "silver": 641,
          "gold": 57
        },
        "account_id": 1165580,
        "is_employee": false,
        "last_modified_date": 1685884200,
        "last_access_date": 1686955725,
        "reputation_change_year": 15674,
        "reputation_change_quarter": 6513,
        "reputation_change_month": 1920,
        "reputation_change_week": 30,
        "reputation_change_day": 20,
        "reputation": 1237288,
        "creation_date": 1326311637,
        "user_type": "registered",
        "user_id": 1144035,
        "location": "New York, United States",
        "website_url": "http://www.data-miners.com",
        "link": "https://stackoverflow.com/users/1144035/gordon-linoff",
        "profile_image": "https://www.gravatar.com/avatar/e514b017977ebf742a418cac697d8996?s=256&d=identicon&r=PG",
        "display_name": "Gordon Linoff"
      }, {
        "badge_counts": {
          "bronze": 5182,
          "silver": 4360,
          "gold": 524
        },
        "account_id": 4243,
        "is_employee": false,
        "last_modified_date": 1687489249,
        "last_access_date": 1687766456,
        "reputation_change_year": 52214,
        "reputation_change_quarter": 30332,
        "reputation_change_month": 11752,
        "reputation_change_week": 280,
        "reputation_change_day": 65,
        "reputation": 1231725,
        "creation_date": 1221344553,
        "user_type": "registered",
        "user_id": 6309,
        "accept_rate": 100,
        "location": "France",
        "website_url": "https://devstory.fyi/vonc",
        "link": "https://stackoverflow.com/users/6309/vonc",
        "profile_image": "https://i.stack.imgur.com/I4fiW.jpg?s=256&g=1",
        "display_name": "VonC"
      }, {
        "badge_counts": {
          "bronze": 3550,
          "silver": 3604,
          "gold": 371
        },
        "account_id": 52822,
        "is_employee": false,
        "last_modified_date": 1687451714,
        "last_access_date": 1687706291,
        "reputation_change_year": 15003,
        "reputation_change_quarter": 6642,
        "reputation_change_month": 1652,
        "reputation_change_week": 40,
        "reputation_change_day": 30,
        "reputation": 1078215,
        "creation_date": 1250527322,
        "user_type": "registered",
        "user_id": 157882,
        "accept_rate": 93,
        "location": "Willemstad, Cura&#231;ao",
        "website_url": "https://balusc.omnifaces.org",
        "link": "https://stackoverflow.com/users/157882/balusc",
        "profile_image": "https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=256&d=identicon&r=PG",
        "display_name": "BalusC"
      }, {
        "badge_counts": {
          "bronze": 3326,
          "silver": 4033,
          "gold": 295
        },
        "account_id": 35417,
        "is_employee": false,
        "last_modified_date": 1686845400,
        "last_access_date": 1687738403,
        "reputation_change_year": 31891,
        "reputation_change_quarter": 15138,
        "reputation_change_month": 4331,
        "reputation_change_week": 120,
        "reputation_change_day": 30,
        "reputation": 1036981,
        "creation_date": 1241362437,
        "user_type": "moderator",
        "user_id": 100297,
        "location": "Cambridge, UK",
        "website_url": "http://www.zopatista.com/",
        "link": "https://stackoverflow.com/users/100297/martijn-pieters",
        "profile_image": "https://www.gravatar.com/avatar/24780fb6df85a943c7aea0402c843737?s=256&d=identicon&r=PG",
        "display_name": "Martijn Pieters"
      }, {
        "badge_counts": {
          "bronze": 1863,
          "silver": 1912,
          "gold": 187
        },
        "account_id": 52616,
        "is_employee": false,
        "last_modified_date": 1687609800,
        "last_access_date": 1687528079,
        "reputation_change_year": 25658,
        "reputation_change_quarter": 10179,
        "reputation_change_month": 2615,
        "reputation_change_week": 80,
        "reputation_change_day": 10,
        "reputation": 1025019,
        "creation_date": 1250420422,
        "user_type": "registered",
        "user_id": 157247,
        "accept_rate": 91,
        "location": "United Kingdom",
        "website_url": "https://thenewtoys.dev",
        "link": "https://stackoverflow.com/users/157247/t-j-crowder",
        "profile_image": "https://i.stack.imgur.com/lUM5Z.jpg?s=256&g=1",
        "display_name": "T.J. Crowder"
      }, {
        "badge_counts": {
          "bronze": 2891,
          "silver": 2557,
          "gold": 263
        },
        "account_id": 11975,
        "is_employee": false,
        "last_modified_date": 1686985808,
        "last_access_date": 1687745386,
        "reputation_change_year": 18667,
        "reputation_change_quarter": 7733,
        "reputation_change_month": 1887,
        "reputation_change_week": 60,
        "reputation_change_day": 20,
        "reputation": 1020541,
        "creation_date": 1222667162,
        "user_type": "registered",
        "user_id": 23354,
        "accept_rate": 100,
        "location": "Forest of Dean, United Kingdom",
        "website_url": "http://blog.marcgravell.com",
        "link": "https://stackoverflow.com/users/23354/marc-gravell",
        "profile_image": "https://i.stack.imgur.com/CrVFH.png?s=256&g=1",
        "display_name": "Marc Gravell"
      }, {
        "badge_counts": {
          "bronze": 2923,
          "silver": 3284,
          "gold": 270
        },
        "account_id": 14332,
        "is_employee": false,
        "last_modified_date": 1683548106,
        "last_access_date": 1686118746,
        "reputation_change_year": 9836,
        "reputation_change_quarter": 3946,
        "reputation_change_month": 1094,
        "reputation_change_week": 50,
        "reputation_change_day": 20,
        "reputation": 1019696,
        "creation_date": 1224432467,
        "user_type": "registered",
        "user_id": 29407,
        "accept_rate": 86,
        "location": "Sofia, Bulgaria",
        "website_url": "http://stackoverflow.com/search?q=user%3a29407&tab=newest",
        "link": "https://stackoverflow.com/users/29407/darin-dimitrov",
        "profile_image": "https://www.gravatar.com/avatar/e3a181e9cdd4757a8b416d93878770c5?s=256&d=identicon&r=PG",
        "display_name": "Darin Dimitrov"
      }, {
        "badge_counts": {
          "bronze": 2468,
          "silver": 2383,
          "gold": 189
        },
        "account_id": 39846,
        "is_employee": false,
        "last_modified_date": 1686952809,
        "last_access_date": 1687731995,
        "reputation_change_year": 10596,
        "reputation_change_quarter": 4652,
        "reputation_change_month": 1294,
        "reputation_change_week": 30,
        "reputation_change_day": 30,
        "reputation": 982636,
        "creation_date": 1243786808,
        "user_type": "registered",
        "user_id": 115145,
        "accept_rate": 84,
        "location": "Pennsylvania, United States",
        "website_url": "https://commonsware.com",
        "link": "https://stackoverflow.com/users/115145/commonsware",
        "profile_image": "https://i.stack.imgur.com/wDnd8.png?s=256&g=1",
        "display_name": "CommonsWare"
      }, {
        "badge_counts": {
          "bronze": 1280,
          "silver": 1141,
          "gold": 182
        },
        "account_id": 680,
        "is_employee": false,
        "last_modified_date": 1686708306,
        "last_access_date": 1687728725,
        "reputation_change_year": 21849,
        "reputation_change_quarter": 9336,
        "reputation_change_month": 2514,
        "reputation_change_week": 70,
        "reputation_change_day": 10,
        "reputation": 944399,
        "creation_date": 1218356820,
        "user_type": "registered",
        "user_id": 893,
        "accept_rate": 84,
        "location": "Christchurch, New Zealand",
        "website_url": "https://hewgill.com",
        "link": "https://stackoverflow.com/users/893/greg-hewgill",
        "profile_image": "https://www.gravatar.com/avatar/747ffa5da3538e66840ebc0548b8fd58?s=256&d=identicon&r=PG",
        "display_name": "Greg Hewgill"
      }, {
        "badge_counts": {
          "bronze": 2526,
          "silver": 1682,
          "gold": 145
        },
        "account_id": 9266,
        "is_employee": false,
        "last_modified_date": 1687601113,
        "last_access_date": 1687766006,
        "reputation_change_year": 8544,
        "reputation_change_quarter": 3931,
        "reputation_change_month": 1183,
        "reputation_change_week": 50,
        "reputation_change_day": 0,
        "reputation": 919223,
        "creation_date": 1221698729,
        "user_type": "registered",
        "user_id": 17034,
        "location": "Madison, WI",
        "website_url": "",
        "link": "https://stackoverflow.com/users/17034/hans-passant",
        "profile_image": "https://i.stack.imgur.com/Cii6b.png?s=256&g=1",
        "display_name": "Hans Passant"
      }, {
        "badge_counts": {
          "bronze": 1331,
          "silver": 1202,
          "gold": 124
        },
        "account_id": 10162,
        "is_employee": false,
        "last_modified_date": 1687692019,
        "last_access_date": 1687765586,
        "reputation_change_year": 19051,
        "reputation_change_quarter": 8035,
        "reputation_change_month": 2174,
        "reputation_change_week": 39,
        "reputation_change_day": -2,
        "reputation": 907381,
        "creation_date": 1221842906,
        "user_type": "registered",
        "user_id": 19068,
        "location": "United Kingdom",
        "website_url": "",
        "link": "https://stackoverflow.com/users/19068/quentin",
        "profile_image": "https://www.gravatar.com/avatar/1d2d3229ed1961d2bd81853242493247?s=256&d=identicon&r=PG",
        "display_name": "Quentin"
      }, {
        "badge_counts": {
          "bronze": 658,
          "silver": 536,
          "gold": 37
        },
        "account_id": 4601727,
        "is_employee": false,
        "last_modified_date": 1687381500,
        "last_access_date": 1687492880,
        "reputation_change_year": 29226,
        "reputation_change_quarter": 8225,
        "reputation_change_month": 1170,
        "reputation_change_week": 20,
        "reputation_change_day": 20,
        "reputation": 871020,
        "creation_date": 1402536093,
        "user_type": "registered",
        "user_id": 3732271,
        "website_url": "http://linkedin.com/in/akrun1",
        "link": "https://stackoverflow.com/users/3732271/akrun",
        "profile_image": "https://www.gravatar.com/avatar/e015ca953dd884c1e0b13d543f0a3368?s=256&d=identicon&r=PG&f=y&so-version=2",
        "display_name": "akrun"
      }, {
        "badge_counts": {
          "bronze": 1961,
          "silver": 1903,
          "gold": 176
        },
        "account_id": 15988,
        "is_employee": false,
        "last_modified_date": 1686845400,
        "last_access_date": 1644608022,
        "reputation_change_year": 11202,
        "reputation_change_quarter": 4541,
        "reputation_change_month": 1204,
        "reputation_change_week": 70,
        "reputation_change_day": 10,
        "reputation": 865082,
        "creation_date": 1225829805,
        "user_type": "registered",
        "user_id": 34397,
        "accept_rate": 87,
        "location": "New Jersey",
        "website_url": "https://SLaks.net",
        "link": "https://stackoverflow.com/users/34397/slaks",
        "profile_image": "https://www.gravatar.com/avatar/7deca8ec973c3c0875e9a36e1e3e2c44?s=256&d=identicon&r=PG",
        "display_name": "SLaks"
      }, {
        "badge_counts": {
          "bronze": 1394,
          "silver": 1218,
          "gold": 170
        },
        "account_id": 34048,
        "is_employee": false,
        "last_modified_date": 1686395100,
        "last_access_date": 1677883091,
        "reputation_change_year": 16041,
        "reputation_change_quarter": 7002,
        "reputation_change_month": 1954,
        "reputation_change_week": 70,
        "reputation_change_day": 0,
        "reputation": 850247,
        "creation_date": 1240625354,
        "user_type": "registered",
        "user_id": 95810,
        "accept_rate": 80,
        "location": "Sunnyvale, CA",
        "website_url": "http://www.aleax.it",
        "link": "https://stackoverflow.com/users/95810/alex-martelli",
        "profile_image": "https://www.gravatar.com/avatar/e8d5fe90f1fe2148bf130cccd4dc311c?s=256&d=identicon&r=PG",
        "display_name": "Alex Martelli"
      }, {
        "badge_counts": {
          "bronze": 1944,
          "silver": 1570,
          "gold": 233
        },
        "account_id": 8291,
        "is_employee": false,
        "last_modified_date": 1687072803,
        "last_access_date": 1687761749,
        "reputation_change_year": 14800,
        "reputation_change_quarter": 6173,
        "reputation_change_month": 1806,
        "reputation_change_week": 100,
        "reputation_change_day": 50,
        "reputation": 849482,
        "creation_date": 1221622605,
        "user_type": "registered",
        "user_id": 14860,
        "accept_rate": 100,
        "website_url": "",
        "link": "https://stackoverflow.com/users/14860/paxdiablo",
        "profile_image": "https://i.stack.imgur.com/vXG1F.png?s=256&g=1",
        "display_name": "paxdiablo"
      }, {
        "badge_counts": {
          "bronze": 1663,
          "silver": 1773,
          "gold": 182
        },
        "account_id": 64585,
        "is_employee": false,
        "last_modified_date": 1686150605,
        "last_access_date": 1687032906,
        "reputation_change_year": 23614,
        "reputation_change_quarter": 10047,
        "reputation_change_month": 2856,
        "reputation_change_week": 120,
        "reputation_change_day": 40,
        "reputation": 835687,
        "creation_date": 1255610900,
        "user_type": "registered",
        "user_id": 190597,
        "accept_rate": 88,
        "website_url": "",
        "link": "https://stackoverflow.com/users/190597/unutbu",
        "profile_image": "https://www.gravatar.com/avatar/8f7683207b9fcc8e77120265517f7ce9?s=256&d=identicon&r=PG&f=y&so-version=2",
        "display_name": "unutbu"
      }, {
        "badge_counts": {
          "bronze": 1234,
          "silver": 1316,
          "gold": 95
        },
        "account_id": 3465245,
        "is_employee": false,
        "last_modified_date": 1687529110,
        "last_access_date": 1687766350,
        "reputation_change_year": 33279,
        "reputation_change_quarter": 12617,
        "reputation_change_month": 2998,
        "reputation_change_week": 95,
        "reputation_change_day": 40,
        "reputation": 814573,
        "creation_date": 1382300846,
        "user_type": "registered",
        "user_id": 2901002,
        "accept_rate": 97,
        "location": "Bratislava, Slovakia",
        "website_url": "",
        "link": "https://stackoverflow.com/users/2901002/jezrael",
        "profile_image": "https://i.stack.imgur.com/hMDvl.jpg?s=256&g=1",
        "display_name": "jezrael"
      }, {
        "badge_counts": {
          "bronze": 1450,
          "silver": 1578,
          "gold": 192
        },
        "account_id": 24377,
        "is_employee": false,
        "last_modified_date": 1686258300,
        "last_access_date": 1687236232,
        "reputation_change_year": 16089,
        "reputation_change_quarter": 6546,
        "reputation_change_month": 1818,
        "reputation_change_week": 40,
        "reputation_change_day": 10,
        "reputation": 806973,
        "creation_date": 1233672960,
        "user_type": "registered",
        "user_id": 61974,
        "location": "Denmark",
        "website_url": "",
        "link": "https://stackoverflow.com/users/61974/mark-byers",
        "profile_image": "https://www.gravatar.com/avatar/ad240ed5cc406759f0fd72591dc8ca47?s=256&d=identicon&r=PG",
        "display_name": "Mark Byers"
      }, {
        "badge_counts": {
          "bronze": 838,
          "silver": 917,
          "gold": 183
        },
        "account_id": 3748,
        "is_employee": false,
        "last_modified_date": 1687608903,
        "last_access_date": 1687671372,
        "reputation_change_year": 12976,
        "reputation_change_quarter": 5060,
        "reputation_change_month": 1550,
        "reputation_change_week": 20,
        "reputation_change_day": 0,
        "reputation": 804016,
        "creation_date": 1220976258,
        "user_type": "registered",
        "user_id": 5445,
        "location": "Guatemala",
        "website_url": "http://codingspot.com",
        "link": "https://stackoverflow.com/users/5445/christian-c-salvad%c3%b3",
        "profile_image": "https://www.gravatar.com/avatar/932fb89b9d4049cec5cba357bf0ae388?s=256&d=identicon&r=PG",
        "display_name": "Christian C. Salvad&#243;"
      }],
      "has_more": true,
      "quota_max": 300,
      "quota_remaining": 299
    };

    it('listen and react on GET_TOP20_SOF_USERS', () => {
        testSaga(actionGetTop20SOFUsersSagaWatcher)
            .next()
            .takeEvery(GET_TOP20_SOF_USERS, getTop20SOFUsersAction)
            .finish()
            .isDone()
    })

    it('provides a list of top 20 users after the getTop20SOFUsers API call', () => {

        return expectSaga(getTop20SOFUsersSaga)
            .provide({
                call(effect, next) {
                    if (effect.fn === getTop20SOFUsers) {                        
                        return resultStub;
                    }
                    // Allow Redux Saga to handle other `call` effects
                    return next();
                },
            })
            .put({
                type: GET_TOP20_SOF_USERS_SUCCESS,
                payload: resultStub,
            })
            .dispatch(getTop20SOFUsersAction())
            .run();
    });

    it('should throw error in the saga after the getTop20SOFUsers API call', () => {
        const error = new Error('An error occurred...');

        return expectSaga(getTop20SOFUsersSaga)
            .provide({
                call(effect, next) {
                    if (effect.fn === getTop20SOFUsers) {
                        throw error;
                    }
                    // Allow Redux Saga to handle other `call` effects
                    return next();
                },
            })
            .put({ type: GET_TOP20_SOF_USERS_ERROR, payload: error })
            .dispatch(getTop20SOFUsersAction())
            .run();
    });

});