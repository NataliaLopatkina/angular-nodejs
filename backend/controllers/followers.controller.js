const followerService = require('../services/follower');

exports.getFollowers = async function(req, res, next) {
    const follower = req.user.id;
    const { following } = req.body;
    const queryReceipt = { where: { follower: follower, following: following }};
    const queryCreate = { follower, following };

    try {
        const followingUser = await followerService.getFollower(queryReceipt);

        if (followingUser) {
            await followerService.destroyFollower(queryReceipt);
            return res.status(200).json({ message: 'You are removed from the followers list of this user!', following: false });
        }

        else {
            await followerService.createFollower(queryCreate);
            return res.status(201).json({ message: 'You are added to the followers list of this user!', following: true });
        }
    }

    catch (e) {
        return res.status(400).json({message: 'Update followers error!'});
    }
}
