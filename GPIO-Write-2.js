module.exports = function(RED) {
    
    function GPIO_Write2_Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {

            
        });
    }
    RED.nodes.registerType("GPIO-Write-2",GPIO_Write2_Node);
}