module.exports = function(RED) {
    
    function GPIO_Read2_Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {

            
        });
    }
    RED.nodes.registerType("GPIO-Read-2",GPIO_Read2_Node);
}