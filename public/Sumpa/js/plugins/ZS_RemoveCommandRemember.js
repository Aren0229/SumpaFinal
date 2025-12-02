/*:
 * @plugindesc Remueve la opción "Recordar Comando" del menú de opciones
 * @author viz
 * @help No se necesita configuración adicional.
 */

(function() {
    var _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function() {
        _Window_Options_addGeneralOptions.call(this);
        this._list = this._list.filter(option => option.symbol !== 'commandRemember');
    };
})();