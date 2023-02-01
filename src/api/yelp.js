//multiple different apis can be used
import axios from "axios";
//we can use axios directly to make a network request, alternately we can make instance of it .that has some preset options assigned.
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/search",
  headers: {
    Authorization:
      "Bearer qxJ9Fh0IcG9RHTgNOnEMCdu13WoEtJumYVMxWwZ3vV1rVieXPnfb-hMzg-fX_kBOvnymLSFjfKjk7A3Db5SjBomW9y61WfKqTCFHaXp4kNKM2a1Z5AwuDi2Zo0vaY3Yx ",
  },
});
