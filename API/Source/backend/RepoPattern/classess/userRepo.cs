﻿using backend.Models;
using backend.RepoPattern.Interfaces;

namespace backend.RepoPattern.classess
{
    public class userRepo : genericeBase<User>, IUser

    {
        public userRepo(BookMyShowContext context) : base(context)
        {
        }
    }
}
