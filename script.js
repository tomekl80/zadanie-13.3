'use scrict';

// Enkodowanie przyjmowanych danych
process.stdin.setEncoding('utf-8');

// Ustawienie nasłuchiwania na zdarzenia odczytu
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
    		case '/exit':
    			process.stdout.write('Quiting app!\n');
    			process.exit();
    			break;
			case '/processEnv':
				process.stdout.write('\nNode.js Version\n')
				process.stdout.write(process.version);
				process.stdout.write('\n\nOS Version\n');
				process.stdout.write(String(process.env.OS));
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
    	}
    }
});
