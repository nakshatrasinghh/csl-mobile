//event-names
export const SIGNIN_MXEVENT = 'SignIn';
export const SIGNUP_MXEVENT = 'SignUp';
export const HOME_MXEVENT = 'HOME';
export const PROFILE_MXEVENT = 'PROFILE';
export const YOUR_INVESTMENTS = 'YOUR-INVESTMENTS';
export const CONFIRM_SMART_BASKET = 'CONFIRM-SMART-BASKET';
export const KYC_MXEVENT = 'KYC';
export const BANK_ACCOUNT_MXEVENT = 'BankAccount';

export const WALLET_MXEVENT = 'Wallet';

export const WALLET_DEPOSIT_MXEVENT = 'WalletDeposit';
export const WALLET_WITHDRAW_MXEVENT = 'WalletWithdraw';

export const BASKET_VIEW_MXEVENT = 'BasketView';
export const BASKET_BUY_MXEVENT = 'BasketBuy';
export const BASKET_SELL_MXEVENT = 'BasketSell';

export const SIMPLE_VIEW_MXEVENT = 'SimpleInvView';
export const SIMPLE_BUY_MXEVENT = 'SimpleBuy';
export const SIMPLE_SELL_MXEVENT = 'SimpleSell';

export const PLATFORM_MXEVENT = 'Platform';

//delete
export const DELETE_MXEVENT = 'AccountDeleteAttempt';
export const ACCOUNT_DELETED_MXEVENT = 'AccountDeleted';

//actions
export const ATTEMPT = actionType => `${actionType}_ATTEMPT`;
export const SUCCESS = actionType => `${actionType}_SUCCESS`;
export const FAILURE = actionType => `${actionType}_FAILURE`;
export const VIEWED = actionType => `${actionType}_VIEWED`;
