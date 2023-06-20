using backend.Models;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.RepoPattern.classess
{
    public class genericeBase<T> : Igenricnterface<T> where T : class
    {
        private readonly BookMyShowContext _contex;
        private readonly DbSet<T> _dbset;

        public genericeBase(BookMyShowContext context)
        {
            _contex = context;
            _dbset = _contex.Set<T>();
        }

        public Task Delete(T ob)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> Get()
        {
            return _dbset.ToList();

        }



        public Task<T> Post(T ob)
        {
            throw new NotImplementedException();
        }

        public Task Put(int i, T ob)
        {
            throw new NotImplementedException();
        }
    }
}
