redirectToCheckout = function (sessionId) {
    var stripe = Stripe("pk_test_51JVvMiHKvDyVXsD5F6Nfh3iBlrzktg4z3KK9m56boqEEUlvjvQIISxTefMUiQj6761HkHJSclIPBV4W4xqqezq0Z00em5DhJNy");
    stripe.redirectToCheckout({ sessionId: sessionId });
}