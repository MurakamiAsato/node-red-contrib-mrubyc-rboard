module.exports = function(RED) {
    
    function GPIO_Read1_Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {

            
        });
    }
    RED.nodes.registerType("GPIO-Read-1",GPIO_Read1_Node);
}