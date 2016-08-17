cat $1 | node index.js > out.undo-bc && ./../smallstack/target/debug/smallstack ./../js-to-smallstack/out.undo-bc
