using TangyWeb_Client.ViewModels;

namespace TangyWeb_Client.Services.IServices
{
    public interface ICartService
    {
        public event Action OnChange;
        Task DecrementCart(ShoppingCart shoppingCart);
        Task IncrementCart(ShoppingCart shoppingCart);
    }
}
