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

        public async Task<IEnumerable<T>> Get()
        {
            return await _dbset.ToListAsync();

        }



        public async Task<T> Post(T ob)
        {
            if(ob == null)
            {
                throw new ArgumentNullException(nameof(ob));
            }
_dbset.Add(ob);
           await _contex.SaveChangesAsync();
            return ob;
            
        }

        public async Task Put(T ob)
        {
            if (ob == null)
            {
                throw new ArgumentNullException(nameof(ob));
            }

            _dbset.Update(ob);
            await _contex.SaveChangesAsync();
            

        }
    }
}
