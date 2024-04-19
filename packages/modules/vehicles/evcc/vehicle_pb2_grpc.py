# flake8: noqa
# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import modules.vehicles.evcc.vehicle_pb2 as vehicle__pb2


class VehicleStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.New = channel.unary_unary(
                '/Vehicle/New',
                request_serializer=vehicle__pb2.NewRequest.SerializeToString,
                response_deserializer=vehicle__pb2.NewReply.FromString,
                )
        self.SoC = channel.unary_unary(
                '/Vehicle/SoC',
                request_serializer=vehicle__pb2.SoCRequest.SerializeToString,
                response_deserializer=vehicle__pb2.SoCReply.FromString,
                )


class VehicleServicer(object):
    """Missing associated documentation comment in .proto file."""

    def New(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SoC(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_VehicleServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'New': grpc.unary_unary_rpc_method_handler(
                    servicer.New,
                    request_deserializer=vehicle__pb2.NewRequest.FromString,
                    response_serializer=vehicle__pb2.NewReply.SerializeToString,
            ),
            'SoC': grpc.unary_unary_rpc_method_handler(
                    servicer.SoC,
                    request_deserializer=vehicle__pb2.SoCRequest.FromString,
                    response_serializer=vehicle__pb2.SoCReply.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'Vehicle', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Vehicle(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def New(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/Vehicle/New',
            vehicle__pb2.NewRequest.SerializeToString,
            vehicle__pb2.NewReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SoC(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/Vehicle/SoC',
            vehicle__pb2.SoCRequest.SerializeToString,
            vehicle__pb2.SoCReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
