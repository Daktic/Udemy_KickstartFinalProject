import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x9B4fAF86306FBB827Ba58DC0566C326F8AbF119C'
);

export default instance;