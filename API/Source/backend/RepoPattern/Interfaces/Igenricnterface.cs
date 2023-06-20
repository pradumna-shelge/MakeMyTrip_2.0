using Microsoft.AspNetCore.Mvc;

namespace backend.RepoPattern.Interfaces
{
    public interface Igenricnterface<T>
    {
        IEnumerable<T> Get();
        
        Task Put(int i, T ob);


        Task<T> Post(T ob);
        Task Delete(T ob);

    }
}
