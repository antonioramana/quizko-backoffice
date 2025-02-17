export const formatBalance = (amount) => {
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
};
