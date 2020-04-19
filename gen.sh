# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Path to the grpc_node_plugin
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

protoc \
  --proto_path="./pb" \
  --proto_path="${GOOGLEAPIS_DIR}" \
  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
  --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  --ts_out="service=grpc-node:${OUT_DIR}" \
  --grpc_out="${OUT_DIR}" \
  pb/calendar.proto \
  pb/group.proto \
  ${GOOGLEAPIS_DIR}/google/api/annotations.proto \
  ${GOOGLEAPIS_DIR}/google/api/client.proto \
  ${GOOGLEAPIS_DIR}/google/api/http.proto
