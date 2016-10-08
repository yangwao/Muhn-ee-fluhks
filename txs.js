var r = require('request')
  , fs = require('fs')
  , json2csv = require('json2csv');

// append on end of file
(function init(){
  var timer = setInterval(function getTX() {
      var fields = ['time',
                    'hash',
                    'relayed_by',
                    'size',
                    'inputs.[0].prev_out.addr',
                    'inputs.[0].prev_out.value',
                    'out.[0].addr',
                    'out.[0].value',
                    'out.[1].addr',
                    'out.[1].value' ]

      var raw = r.get({url: 'https://blockchain.info/unconfirmed-transactions?format=json', json:true },
        function(error, response, body) {
          try {
            csv = json2csv({ data: body.txs, fields: fields, eol: ';', hasCSVColumnTitle: false })
            fs.appendFile('./txs.csv', csv)
            console.log('bytes written', csv.length);
          } catch (err) {
            console.error(err);
          }
      });
    }, 1000);
})();
