using TangyWeb_Models;

namespace TangyWeb_Client.Services.IServices
{
    public interface IPaymentService
    {
        public Task<SuccessModelDTO> Checkout(StripePaymentDTO model);

    }
}